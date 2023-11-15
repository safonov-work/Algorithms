const whoIsOnline = (friends) => {
    const obj = {};

    for (const friendsEl of friends) {
        if (friendsEl.status) {
            obj[friendsEl.status] = obj[friendsEl.status]
        }
        if(friendsEl.lastActivity > 10 || friends.status === "online") {
            obj["away"] = obj[friends.username]
        }
    }



    return obj;
}

console.log(whoIsOnline([{
    username: 'David',
    status: 'online',
    lastActivity: 10
}, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 10
}]))