from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from datetime import datetime
from .models import *
# Create your views here.

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
        user.lastPaid = currentMonth
        user.batch = request.data['batch']
        user.save()
        # Payment succeed
        return Response({'status': 'Done', 'discount': 'No'})
    except:
        # exception raised when a User not found with a number, so create one
        User.objects.create(firstName=request.data['firstName'], lastName=request.data['lastName'], 
        age=request.data['age'], number=request.data['number'], address=request.data['address'],
        lastPaid=currentMonth, batch=request.data['batch'])
    return Response({'status': 'Done', 'discount': 'Yes'})