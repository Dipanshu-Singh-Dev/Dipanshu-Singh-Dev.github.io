import Separator from '../Separator/Separator'
import styles from "./GithubStats.module.css"
import Head1 from "../Head1/Head1"
import GitHubCalendar from "react-github-calendar-dipanshu";
const GithubStats = () => {
  return (
    <div className={styles.container}>
      <Head1 text="Github" />
      <div className={styles.SVGContainer}>
        <img
          className={styles.StatImages}
          src="https://is-potato2.vercel.app/api?username=dipanshu-singh-dev&theme=transparent&text_color=d3d3d3&ring_color=ffffff&custom_title=Github Stats&title_color=ffffff&show_icons=true&icon_color=ffffff"
          alt="stats"
        />
        <img
          className={styles.StatImages}
          src="https://is-potato.vercel.app?user=dipanshu-singh-dev&theme=transparent&date_format=j%20M%5B%20Y%5D&sideNums=white&stroke=gray&border=white&ring=lightgray&fire=white&currStreakNum=white&currStreakLabel=white&sideLabels=white&dates=lightgray"
          alt="streak"
        />
        <img
          id="normalLangs"
          className={styles.StatImages}
          src="https://is-potato2.vercel.app/api/top-langs/?username=dipanshu-singh-dev&layout=donut&langs_count=4&theme=transparent&text_color=d3d3d3&title_color=ffffff"
          alt="langs"
        />
      </div>
      <div id={styles.calendar}>
        <h2 style={{ color: "white" }}>Github Calendar</h2>
        <GitHubCalendar
          showWeekdayLabels
          weekStart="1"
          username="dipanshu-singh-dev"
          colorScheme="dark"
          style={{ color: "white", width: "90%", margin: "auto" }}
        />
      </div>
      <Separator />
    </div>
  );
}

export default GithubStats