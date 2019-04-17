function checkMood(){
    let moodCheck = ["sad","happy","silly","angery"];
    return moodCheck[Math.floor(Math.random()*moodCheck.length)];
}

class Mood extends React.Component{
    render() {
        const mood = checkMood();
        let msg ;
        if(mood =="sad"){
            msg = "feels sad so, watch some funny videos";
        }else{
            msg ="feeling "+mood;
        }
        return (
             <div>
               <h2>Check Mood : {mood}</h2>
               <p>{msg}</p>
             </div>
        );
    }
}