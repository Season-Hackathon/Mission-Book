import datetime

from django.shortcuts import render, redirect, get_object_or_404

from checklist.models import MemberChecklist
from login.views import this_year
from member.models import Member


# Create your views here.

def index_null(request):
    return index(request,1)


def index(request, category):
    user_id = None
    if request.user.is_authenticated:
        user_id = request.user.user_id  # 혹은 request.user.username 등 로그인한 유저의 정보를 사용

    if user_id and datetime.datetime.now().year != this_year:
        return redirect('login:ending',1)

    checklists = MemberChecklist.objects.filter(member=user_id)
    if category == 1:
        some_missionlist_pro = checklists.filter(checklist__category=1, status=0,
                                                 checklist__need_class_stat__lte=request.user.int_stat)  # 카테고리가 1, status가 0인 미션 리스트를 가져옴
        some_missionlist_pre = checklists.filter(checklist__category=1, status=-1,
                                                 checklist__need_class_stat__lte=request.user.int_stat)  # 카테고리가 1, status가 -1인 미션 리스트를 가져옴
        # some_missionlist_pro.order_by('checklist__level')
        # some_missionlist_pre.order_by('checklist__level')
        category_name = '학업'
    elif category == 2:
        some_missionlist_pro = checklists.filter(checklist__category=2, status=0,
                                                 checklist__need_social_stat__lte=request.user.social_stat)  # 카테고리가 2, status가 0인 미션 리스트를 가져옴
        some_missionlist_pre = checklists.filter(checklist__category=2, status=-1,
                                                 checklist__need_social_stat__lte=request.user.social_stat)  # 카테고리가 2, status가 -1인 미션 리스트를 가져옴
        # some_missionlist_pro.order_by('checklist__level')
        # some_missionlist_pre.order_by('checklist__level')
        category_name = '사교'
    elif category == 3:
        some_missionlist_pro = checklists.filter(checklist__category=3, status=0,
                                                 checklist__need_exp_stat__lte=request.user.exp_stat)  # 카테고리가 3, status가 0인 미션 리스트를 가져옴
        some_missionlist_pre = checklists.filter(checklist__category=3, status=-1,
                                                 checklist__need_exp_stat__lte=request.user.exp_stat)  # 카테고리가 3, status가 -1인 미션 리스트를 가져옴
        some_missionlist_pro.order_by('checklist__level')
        some_missionlist_pre.order_by('checklist__level')
        category_name = '경험'
    else:
        some_missionlist = None
    context = {'some_missionlist_pre': some_missionlist_pre,
               'some_missionlist_pro': some_missionlist_pro, 'category_name': category_name}
    return render(request, 'index.html', context)

def mission_modal(request, mission_id):
    member = Member.objects.get(id=request.user.id)
    member_checklist = MemberChecklist.objects.get(member=member.user_id, checklist_id=mission_id)

    if request.method == 'POST' :
        mission_check_value = int(request.POST.get('mission_check_value', 0))
        if request.POST.get('button_name') == 'minus' and mission_check_value > 0:
            mission_check_value -= 1
        elif request.POST.get(
                'button_name') == 'plus' and mission_check_value < member_checklist.checklist.complete_num:
            mission_check_value += 1
        else:
            pass  # do nothing
    # 추가하기
    if request.method == 'POST' and request.POST.get('checklist_add') == '추가하기':
        member_checklist.status = 0
        member_checklist.save()

    # 포기하기
    if request.method == 'POST' and request.POST.get('give_up') == '포기':
        member_checklist.status = -1
        member_checklist.save()

    # 완료하기
    if request.method == 'POST' and request.POST.get('checklist_complete') == '완료':
        member_checklist.status = 1
        member.int_stat+=member_checklist.checklist.class_reward
        member.social_stat+=member_checklist.checklist.social_reward
        member.exp_stat+=member_checklist.checklist.exp_reward
        member.total_exp+=member_checklist.checklist.total_exp_reward
        member_checklist.save()
        member.save()
        return redirect('checklist:index_null' )

    return render(request, 'mission_modal.html', {'member_checklist':member_checklist})


