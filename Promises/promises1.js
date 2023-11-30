posts = [];

lastActivityTime = 0;


function updateLastUserActivityTime(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			lastActivityTime = new Date().toLocaleTimeString();
			resolve(lastActivityTime);
		}, 1000);		
	});

}

function createPost(newPost){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
            posts.push(newPost);
		    updateLastUserActivityTime().then(() => {
                console.log(posts);
		        console.log(lastActivityTime);
            });
		    resolve();
        },2000);
        
	});

}


function deletePost(){

	return new Promise((resolve, reject) => {
		setTimeout(() => {
            resolve(posts.pop());
		    console.log(posts);
        },3000);
	});
}

createPost("This is a new post").then(() => createPost("This is another new post").then(() => deletePost()));

