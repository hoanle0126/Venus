<!DOCTYPE html> <html lang="en">
<body> 
    <h1>User email verification</h1> 
    <p>Hello {{$user->name}}</p>
    <p>Please click the below button to verify your email address</p>
    <a style="padding:30px,display:flex,justify-content:center,align-item:center,background-color:#333" href="{{URL::temporarySignedRoute('verification.verify',now()->addMinutes(30),['id'=>$user->id])}}">Click to
        verified</a>
</body>

</html>