function TopCard(props) {
    let todayWord = words[words.length - 1];
    /*
    // For future to automate
    let dayOfMonth = (new Date()).getDate();
    let dictSize = words.length - 1;
    let revisionId = 0;
    if(dayOfMonth > dictSize){
        revisionId = dayOfMonth % dictSize;
    }else {
        revisionId =  dictSize % dayOfMonth ;
    }
    let revision = words[revisionId];*/
    let rm = revisionWord.meaning.map(meaning => <p className="card-text">{meaning}</p>)
    let wm = todayWord.meaning.map(meaning => <p className="card-text">{meaning}</p>)

    return (
        <div style={{"display" : "flex"}}>
        <div className="card" style={{width:"50vw", "background": "linear-gradient(to bottom, #fefcea 0%,#f1da36 100%)"}}>
            <img src="https://bunow.com/wp-content/uploads/2018/10/wotd-768x509.jpg" height={100}/>
            <div className="card-body">
                <h5 className="card-title">{todayWord.word}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{todayWord.type}</h6>
                <p className="card-text">{wm}</p>
            </div>
        </div>
        <div className="card" style={{width:"50vw","background" :"linear-gradient(to bottom, #f3e2c7 0%,#c19e67 50%,#b68d4c 51%,#e9d4b3 100%)"}}>
            <img src="https://as2.ftcdn.net/jpg/02/74/13/97/500_F_274139754_ZJOgZeUVLIG844NuvptJY7yJX3w1fjd5.jpg"  height={100}/>
            <div className="card-body">
                <h5 className="card-title">{revisionWord.word}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{revisionWord.type}</h6>
                <p className="card-text">{rm}</p>
            </div>
        </div>
        </div>
    )
}
