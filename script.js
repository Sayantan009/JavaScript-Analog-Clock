const currentTime = () =>{
    const d = new Date();
    let hour = d.getUTCHours();
    let minutes = d.getUTCMinutes();
    let seconds = d.getUTCSeconds()
    return (`${Math.floor(hour+5)} ${Math.floor(minutes+30)} ${Math.floor(seconds)}`)
    }
    
    setInterval(()=>{
      console.log("The current time is: ", currentTime())
    }, 1000)