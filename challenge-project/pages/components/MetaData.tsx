interface MetaDataProps {
  metaData: {
    author?: string;
    description?: string;
    source?: string;
    title?: string;
  };
}

const MetaData: React.FC<MetaDataProps> = ({ metaData }) => {
  const { author, description, source, title } = metaData;
  return (
    <div>
      {title ? <p>Title: {title}</p> : null}
      {source ? <p>Source: {source}</p> : null}
      {description ? <p>Description: {description}</p> : null}
      {author ? <p>Author: {author}</p> : null}
    </div>
  );
};

export default MetaData;
