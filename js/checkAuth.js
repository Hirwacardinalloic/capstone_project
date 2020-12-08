let uid = localStorage.getItem('token');
    if(!uid)
        location.assign('sign.html');