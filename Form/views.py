from pyexpat.errors import messages
from django.shortcuts import render,redirect
from django.contrib import messages
from .models import Register
# Create your views here.
def Form(request):
    if request.method=='POST':
        post=Register()
        post.First_Name=request.POST.get('First_Name')
        post.Last_Name=request.POST.get('Last_Name')
        post.User_Name=request.POST.get('User_Name')
        post.Mobile_Number=request.POST.get('Mobile_number')
        post.Email=request.POST.get('Email')
        post.Password=request.POST.get('Password')
        if Register.objects.filter(Email=post.Email).exists():
            messages.info(request,'email is already exists')
            return redirect('/')
        else:
            post.save()
            return render(request,"Base.html")
    return render(request,"index.html")

def success(request):
    return render(request,"Base.html")