from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from datetime import datetime
from .models import *
# Create your views here.

@api_view(['POST'])
def completePayment(request):
    currentMonth = datetime.now().month-1
    if(request.data['firstTime']):
        User.objects.create(firstName=request.data['firstName'], lastName=request.data['lastName'], 
        age=request.data['age'], number=request.data['number'], address=request.data['address'],
        lastPaid=currentMonth, batch=request.data['batch'])
    else:
        user = User.objects.get(number=request.data['number'])
        user.lastPaid = currentMonth
        user.batch = request.data['batch']
        user.save()
    return Response({'status': 'Done'})

@api_view(['POST'])
def createOrUpdateRecord(request):
    # Get current month and assign value between 0 and 1
    currentMonth = datetime.now().month-1
    try:
        # Since number is the primary key
        user = User.objects.get(number=request.data['number'])
        # If last paid month is current month, return 'Already Paid'
        if(user.lastPaid == currentMonth):
            return Response({'status': 'Already Paid', 'discount': 'No'})
        # Allow Payment to the user
        return Response({'status': 'Done', 'discount': 'No'})
    except:
        pass
    return Response({'status': 'Done', 'discount': 'Yes'})