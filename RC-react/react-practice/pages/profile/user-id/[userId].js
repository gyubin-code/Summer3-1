const ProfilePage = ({
    username,
    major,
    age,
    userId
    }) =>
    <div>
    <h1>Profile</h1>
    <p>username : {username}</p>
    <p>major : {major}</p>
    <p>age : {age}</p>
    <p>userId: {userId}</p>
    </div>;
export async function getServerSideProps(context) {
    const userId =context.query.userId
    return {
        props: {
        username: "Ikanny",
        major: "Computer engineering",
        age: 20,
        userId : userId
        }
    };
    }
export default ProfilePage;