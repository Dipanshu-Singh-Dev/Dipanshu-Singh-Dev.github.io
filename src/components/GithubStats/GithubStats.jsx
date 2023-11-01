import Separator from '../Separator/Separator'
import styles from "./GithubStats.module.css"
import Head1 from "../Head1/Head1"
const GithubStats = () => {
  return (
    <div className={styles.container}>
      <Head1 text="Github" />
      <div className={styles.SVGContainer}>
        <img
          className={styles.StatImages}
          src="https://is-potato2.vercel.app/api?username=dipanshu-singh-dev&theme=transparent&text_color=d3d3d3&border_radius=2&ring_color=ffffff&custom_title=Github Stats&title_color=ffffff&show_icons=true&icon_color=ffffff"
          alt="stats"
        />
        <img
          className={styles.StatImages}
          src="https://is-potato.vercel.app?user=dipanshu-singh-dev&theme=transparent&date_format=j%20M%5B%20Y%5D&sideNums=white&stroke=gray&border=darkgray&ring=lightgray&fire=white&currStreakNum=white&currStreakLabel=white&sideLabels=white&dates=lightgray"
          alt="streak"
        />
        <img
          id="normalLangs"
          className={styles.StatImages}
          src="https:/is-potato2.vercel.app/api/top-langs/?username=dipanshu-singh-dev&layout=donut&langs_count=4&theme=transparent&text_color=d3d3d3&border_radius=2&ring_color=ffffff&title_color=ffffff"
          alt="langs"
        />
      </div>
      <Separator />
    </div>
  );
}

export default GithubStats