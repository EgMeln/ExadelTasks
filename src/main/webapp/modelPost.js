let filterClass = {
    date: null,
    hashtags: ""
}
localStorage.setItem("filter", JSON.stringify(filterClass));

class PostCollection{
    #postlist = [
        {
        id: "1",
        description: "Papillon",
        origin: "France",
        createdAt: new Date(),
        author: "admin",
        photoLink: "./assets/images/dog1.jpg",
        hashtags: ["France","Male","Aggressive"],
        likes:["admin"]
        },
        {
        id: "2",
        description: "Belgian tervuren",
        origin: "Belgium",
        createdAt: new Date(),
        author: "admin",
        photoLink: "./assets/images/dog2.jpg",
        hashtags: ["Loyal", "Energetic", "Alert", "Intelligent", "Protective"],
        likes:[]
        },
        {
        id: "3",
        description: "Doberman",
        origin: "Germany",
        createdAt: new Date(),
        author: "admin",
        photoLink: "https://wallbox.ru/resize/1280x800/wallpapers/main2/201715/149187872158ec4341b8eb48.36892246.jpg",
        hashtags: ["Fearless", "Loyal", "Energetic", "Submissive", "Alert", "Intelligent", "Confident"],
        likes:["admin"]
        },
        {
        id: "4",
        description: "American eskimo dog",
        origin: "USA",
        createdAt: new Date(),
        author: "admin",
        photoLink: "https://rostof.ru/sites/default/files/field/image/article/dog-2088424_1280.jpg",
        hashtags: ["Alert", "Intelligent", "Reserved", "Friendly", "Protective"],
        likes:[] 
        },
        {
        id: "5",
        description: "Siberian husky",
        origin: "Siberia",
        createdAt: new Date(),
        author: "admin",
        photoLink: "https://www.publicdomainpictures.net/pictures/40000/velka/dog-portrait-1367174943ayO.jpg",
        hashtags: ["Sociable", "Alert", "Intelligent", "Friendly", "Sensitive"],
        likes:["admin"]
        },
        {
        id: "6",
        description: "",
        origin: "",
        createdAt: new Date(),
        author: "admin",
        photoLink: "./assets/images/dog_sofa1.jpg",
        hashtags: ["Cute", "Lovable", "Sweet"],
        likes:["admin"]
        },
        {
        id: "7",
        description: "",
        origin: "",
        createdAt: new Date(),
        author: "admin",
        photoLink: "./assets/images/dog_sofa2.jpg",
        hashtags: ["Cute", "Lovable", "Sweet"],
        likes:["admin"]
        },
    ];
    getPage(skip = 0, top = 2, filterConfig = null){
        let result = [];
        if(filterConfig == null || (filterClass.author === "" && filterClass.date == null && filterClass.hashtags === "")){
            result = this.#postlist.slice(skip,skip + top);
            console.log("Getting an unfiltered array");
        } else {
            result = this.#postlist.filter(function(post){
                let fit = true;   
                if(filterClass.hashtags !== ""){
                    if(post.hashtags.indexOf(filterClass.hashtags) === -1){
                        fit = false;
                    }
                }
                if(filterClass.date != null){
                    let filterDate = new Date(filterClass.date);
                    let postDate = new Date(post.createdAt);
                    if(filterDate.getFullYear() !== postDate.getFullYear()){
                        fit = false;
                    } else if(filterDate.getMonth() !== postDate.getMonth()){
                        fit = false;
                    } else if(filterDate.getDate() !== postDate.getDate()){
                        fit = false;
                    }
                }
                return fit;
            });
            result = result.slice(skip,skip+top);
            console.log("Getting a filtered array");
        }
        return result;
    }
    get(id){
        let post = this.#postlist.find(item => String(item.id) === String(id))
        console.log("Post " + post.id + " was found");        
        return post;
    }
    static validate(post){
        if(post.hasOwnProperty('id') &&
           post.hasOwnProperty('description') &&
           post.hasOwnProperty('origin') &&
           post.hasOwnProperty('createdAt') &&
           post.hasOwnProperty('author') &&
           post.hasOwnProperty('photolink') &&
           post.hasOwnProperty("hashtags") &&
           post.hasOwnProperty("likes")){
               console.log("Post is valid");
               return true;
           } else {
               console.log("Post is not valid");
               return false;
           }
    }
    add(post){
        if(true){
            this.#postlist.push(post);
            console.log("Post " + post.id + " was added");
        } else {
            alert("Error");
        }
        this.save();
    }
    edit(id,post){
        let postEdit = this.get(id);
        for(let key in post){
            if(postEdit.hasOwnProperty(key)){
                postEdit[ket] = post[key];
            }
        } 
        this.save();
        console.log("Post" + postEdit.id + "has been changed")
    }
    remove(id){
        let deleted = this.#postlist.indexOf(this.#postlist.find(item => String(item.id) === String(id)));
        let temp = this.#postlist[deleted].id;
        if(deleted !== -1){
            this.#postlist.splice(deleted,1);
        }
        this.save();
        console.log("Post " + temp + " was deleted");
    }
    constructor(localPosts) {
        if (localPosts === null || localPosts === undefined || localPosts.length === 0) {
            console.log(localPosts + "Old array");
            this.restore();
        } else {
            console.log("New array");
            this.#postlist = localPosts;
        }
        console.log("Post Collection was created!");
    }
    addAll(postlist){
        let invalidPostsList = [];
        for(let post of postlist){
            if(PostCollection.validate(post)){
                this.#postlist.push(post);
            } else {
                invalidPostsList.push(post);
            }
        }
        this.save();
        return invalidPostsList;
    }
    static getPostArrayFromLocale() {
        return JSON.parse(localStorage.getItem("postlist"));
    }
    restore() {
        PostCollection.setPostArrayToLocale(this.#postlist);
    }
    static setPostArrayToLocale(array) {
        localStorage.setItem("postlist", JSON.stringify(array));
    }
    save() {
        PostCollection.setPostArrayToLocale(this.#postlist);
    }
    getPostArray() {
        return this.#postlist;
    }
    getLastId() {
        return parseInt(this.#postlist[this.#postlist.length - 1].id);
    }
}
let postArray = new PostCollection(PostCollection.getPostArrayFromLocale());