import React from 'react'

const FrontendLayout = memo((props) => {
    const [animationClass, setAnimationClass] = useState("animate__fadeIn");

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const handleScroll = () => {
        if (document.documentElement.scrollTop > 250) {
            setAnimationClass("animate__fadeIn");
        } else {
            setAnimationClass("animate__fadeOut");
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>FrontendLayout</div>
    )
});

FrontendLayout.displayName = "FrontendLayout";
export default FrontendLayout;
