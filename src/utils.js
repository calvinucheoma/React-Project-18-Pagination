const paginate = (followers) => {
    const itemsPerPage = 10;
    const pages = Math.ceil(followers.length / itemsPerPage);

    const newFollowers = Array.from({length:pages}, (_,index) => {
        const start = index * itemsPerPage;
        return followers.slice(start,start + itemsPerPage);
    });

return newFollowers;
}

export default paginate

//Array.from method requires an object(empty in our case) with length property to create
// a new array which we set equal to our 'pages' variable above.
//As a second argument for Array.from, we passed in a callback function
// that just iterates over the array(the 10 items from our length)