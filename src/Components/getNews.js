import {Component} from 'react';
export default class getNews extends Component{
     articles =  [{"source": {
        "id": null,
        "name": "Livemint"
        },
        "author": "Shouvik Das",
        "title": "Airtel-backed OneWeb launches 40 satellites with SpaceX, to start global services this year | Mint - Mint",
        "description": "OneWeb originally sought to deploy a total of 648 satellites to enable its network of satellite-based internet connectivity around the world",
        "url": "https://www.livemint.com/industry/telecom/airtelbacked-oneweb-launches-40-satellites-with-spacex-to-start-global-services-this-year-11673365251254.html",
        "urlToImage": "https://images.livemint.com/img/2023/01/10/600x338/Airtel_1673365481973_1673365482249_1673365482249.jpg",
        "publishedAt": "2023-01-10T15:46:27Z",
        "content": "NEW DELHI : Airtel-backed OneWeb successfully launched and deployed 40 satellites onboard a SpaceX launcher on Monday, January 9, the company confirmed in a statement. The launch was the UK-based sat… [+2928 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hindustan Times"
        },
        "author": "HT Education Desk",
        "title": "JEE Main 2023 LIVE: SC refuses to postpone JEE Main exam, next hearing on Feb 21 - Hindustan Times",
        "description": "JEE Mains 2023 postponement hearing LIVE Updates: Bombay HC has not postponed NTA JEE Session 1 dates. The next hearing will be on February 21, 2023.",
        "url": "https://www.hindustantimes.com/education/competitive-exams/jee-main-2023-live-jee-mains-postponed-plea-75-eligibility-criteria-bombay-hc-jeemain-nta-nic-in-latest-updates-101673334784134.html",
        "urlToImage": "https://images.hindustantimes.com/img/2023/01/10/1600x900/jee_main_2023_bombay_hc_1673335789379_1673335789721_1673335789721.jpg",
        "publishedAt": "2023-01-10T15:39:25Z",
        "content": "JEE Mains 2023 postponement hearing Live Updates: The Bombay High Court has not postponement of the Joint Entrance Examination (JEE) Mains 2023. The Court has asked petitioner to file rejoinder. The … [+12579 chars]"
        }]
    constructor()
    {
        super();
       this.state = {
        articles : this.articles,
        search:"",
        PageNo:1,
        Max:3,
        Min:1
       }
    }
    async search(key){
        // let data = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=d2efb00b186a483e8a5928b1e98ade41');
        // let parsedData = await data.json();
        let searchResult = [];
        for(let i=0;i<this.articles.length;i++)
        {
            if(JSON.stringify(this.articles[i].description).includes(key)===true)
            searchResult.push(this.articles[i]);
        }
        this.setState({articles:searchResult})
       
    }
    async componentDidMount()
    {
       
        let data = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=d2efb00b186a483e8a5928b1e98ade41');
        this.articles = await data.json();
        this.articles = this.articles.articles;
        this.setState({articles:this.articles.slice((this.state.PageNo-1)*7 , (this.state.PageNo)*7-1)})
    }
    sech = (event)=>{
        this.setState({search:event.target.value})
        let search_articals = [];
        this.state.articles.map(x=>{
            if(x.title.includes(this.state.search))
            search_articals.push(x);
        });
        this.setState({articles:search_articals})
    }
    filter = ()=>{
        console.log("hi")
        
    }
    incrementpage = ()=>{
        if(this.state.PageNo<this.state.Max)
        {
            this.setState({PageNo : this.state.PageNo + 1})
       }
       console.log(this.state.PageNo)
    this.setState({articles:this.articles.slice((this.state.PageNo-1)*7 , (this.state.PageNo)*7-1)})
    }
    decrementpage=()=>{
        if(this.state.PageNo > this.state.Min)
        {
            console.log("hi");
            this.setState({PageNo : this.state.PageNo - 1})
        }
        this.setState({articles:this.articles.slice((this.state.PageNo-1)*7 , (this.state.PageNo)*7-1)})
    console.log(this.state.PageNo)
    }
    render()
    {
        return  (
            <>
        <div className='heading'>
        City News
        <input type="text" name="search" id="search" placeholder="Search News" onChange={this.sech} value={this.state.search}/>
        <input type="button" name="srchbtn" id="srchbtn" onChange={this.filter} value="Search" />
        </div>
        <div className='ContentDiv'>
        {this.state.articles.map((item,index)=>{
            return<>
        <div className='card' key={index}>
        <img src={item.urlToImage==null?"https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg":item.urlToImage} alt="img" width={300} height={150} />
        <div><h4>{item.title}</h4>
        <p> {item.author==null?"unknown":"By "+item.author} On {item.publishedAt}</p>
        <a href={item.url}>READ MORE</a></div>
        </div>
        </>
    })}
        </div>
        <div className='PageNav'>
            <input type='button' value="&larr;" id= "1" onClick={this.decrementpage} />
            <input type='button' value="&rarr;" id = "2" onClick={this.incrementpage}/>
        </div>
        </>
        )
   
    }
    
}
