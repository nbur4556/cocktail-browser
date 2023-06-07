interface ContentCardSectionProps {
  children: React.ReactNode;
}

const ContentCardSection = (props: ContentCardSectionProps) => {
    return <section className="m-5 md:m-10">
        {props.children}
    </section>
}

export default ContentCardSection;