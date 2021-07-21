const friends = ["Eric", "Jimmy", "Steve", "Joe"];

const FriendsPage = () => 
    <div>
        {friends.map((friends,i)=> 
        <p key={i}> name : {friends}</p>)}
    </div>;
// map에다가 인자로써 funtion을 리턴한다. '
// map은 주로 배열에서 리턴한다
export default FriendsPage;