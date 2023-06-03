import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";
import styles from "../styles/image.module.css";

export default function Index() {
  return (
    <div style={Styles.body}>
        <Layout />
        <div>        
            <p style = {Styles.bigcontent}> Here are my Projects  </p>
        </div>

        <div style = {Styles.container}>
            <img style = {Styles.screenshot} src = '/project1.jpg'/>
            <p style = {Styles.content}> Java text-based adventure game: I collaborated with two other students on this project for my data structures class. We created the map of the game using a graph and coded the rest of the game play using various classes</p>
        </div>
    
        <div style = {Styles.container}>
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
