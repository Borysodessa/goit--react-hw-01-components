import {Title} from "./Title";

export const StatisticTitle = ({title}) => {
  return (
    title.map(element =>
        element.title.length > 0 && (
          <li key={element.id}>
            <Title title={element.title}/>
          </li>
      )
    ))
}
