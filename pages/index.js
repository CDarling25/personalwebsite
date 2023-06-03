import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";
import styles from "../styles/container.module.css";
import imagestyle from "../styles/image.module.css";

export default function Index() {
  return (
    <div style={Styles.body}>
      <Layout />
      <div className = {styles.container}>        
        <img className = {imagestyle.image} src="/picture.JPG"/>
        <p style = {Styles.bigcontent}> Hello! I'm Cameron Darling  </p>
      </div>
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

        <div style = {Styles.buttoncontainer}>
          <div style = {Styles.button}>
            <a href = 'https://www.linkedin.com/in/cameron-darling-416496238'>
              <button>
                My LinkedIn
              </button>
            </a>
            <a href = 'https://smithcollege-my.sharepoint.com/:w:/g/personal/sdarling_smith_edu/Ee9bPifg-idCokfK-ViAH20Bjq2O-xwT4CjMh_UBZf9iMg?e=ZOOmdY'>
              <button>
                My Resume
              </button>
            </a>
          </div>
        </div>
    </div>
  );
}
