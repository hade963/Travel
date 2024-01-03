import "./sectiontitle.css";
export default function Section(props) { 
  const {sectionName, sectionTitle} = props;
  return (
    <div className="section-title">
      <p>{sectionName}</p>
      <h2>{sectionTitle}</h2>
    </div>
  );
}