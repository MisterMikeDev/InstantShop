import GithubProfileIcon from "@/components/Icons/GithubIcon";
import "./index.scss";
export default function GithubProfileLink() {
    return (
        <a
            href="https://github.com/MisterMikeDev"
            className="header-profile-link"
            title="Link del perfil de Github"
            target="_blank"
        >
            <GithubProfileIcon />
        </a>
    );
}
