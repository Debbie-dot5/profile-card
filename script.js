
    
    function updateUTCTime() {
        const utcTimeElement = document.getElementById('utcTime');
        const currentUTC = new Date().toUTCString(); 
        utcTimeElement.textContent = currentUTC; 
    }

    updateUTCTime();

