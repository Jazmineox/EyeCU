from flask import Blueprint, render_template



auth = Blueprint('auth', __name__)




@auth.route('/login')
def login():
    return render_template('login.html', boolean=True)

@auth.route('/logout')
def logout():
    return "<p>logout</p>"

@auth.route('/signup')
def sign_up():
    return render_template('sign_up.html')

@auth.route('/upload')
def upload():    
    return render_template('upload.html')

@auth.route('/appointment')
def appointment():    
    return render_template('appointment.htm')

@auth.route('/about')
def about():    
    return render_template('about.htm')
