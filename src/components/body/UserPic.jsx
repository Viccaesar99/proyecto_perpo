import ProfileImage from '../../assets/img/pfp.jpg'

export function UserPic() {

    return (
        <div className="w-56 h-56 rounded-full bg-white overflow-hidden">
            <img src={ProfileImage} alt="Profile Image" />
        </div>
    );
}