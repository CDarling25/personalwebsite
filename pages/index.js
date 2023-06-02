import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";

export default function Index() {
  return (
    <div style={Styles.body}>
      <Layout />
      <div style={Styles.bigcontent}>
        <h1> Hello! I'm Cameron Darling  </h1>
        <Spacer height = {0}/>
          <div style = {Styles.content}>
            <p style = {Styles.red}>
              I am a Junior at Smith College majoring in Computer Science and Data Science
            </p>
          <Spacer height={1}/>
            <p style = {Styles.orange}>
              I enjoy playing lots of different sports for fun! In college I started playing Ice Hockey and am currently the President of Smith's Club Ice Hockey Team
            </p>
          <Spacer height={1}/>
            <p style = {Styles.yellow}>
              In my free time I enjoy crafting. I especially enjoy knitting, embroidering, and mending my clothes!
            </p>
          </div>
      </div>
    </div>
  );
}
