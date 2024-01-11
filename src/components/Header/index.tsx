import GithubProfileLink from "@/components/GithubProfileLink";
import RepoLink from "@/components/RepoLink";
import Title from "@/components/Title";
import "./index.scss";

export default function Header() {
    return (
        <header className="header-container">
            <GithubProfileLink />
            <Title />
            <RepoLink />
        </header>
    );
}
