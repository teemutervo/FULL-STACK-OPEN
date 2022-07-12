import { useState } from 'react'

const Header = (props) => {
  return (
  <div>
    <h1>Give feedback</h1>
  </div>
  )
}

const Statistics = (props) => {
  
  const average = (props.good - props.bad) / props.total
  const positive = (props.good * 100) / props.total
  const avgRound = Number((average).toFixed(2))
  const posRound = Number((positive).toFixed(2))



  if (props.total===0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
return(
<div>

<table>
  <thead align='left'>
    <tr>
      <th>good</th>
      <th>{props.good}</th>
    </tr>
    <tr>
      <th>neutral</th>
      <th>{props.neutral}</th>
    </tr>
    <tr>
      <th>bad</th>
      <th>{props.bad}</th>
    </tr>
    <tr>
      <th>all</th>
      <th>{props.total}</th>
    </tr>
    <tr>
      <th>average</th>
      <th>{avgRound}</th>
    </tr>
    <tr>
      <th>positive</th>
      <th>{`${posRound}%`}</th>
    </tr>

  </thead>
</table>
</div>
  )
}
/*  <StatisticLine text="good" value ={props.good} />
  <StatisticLine text="neutral" value ={props.neutral} />
  <StatisticLine text="bad" value ={props.bad} />
  <StatisticLine text="total" value ={props.total} />
  <StatisticLine text="average" value ={average} />
  <StatisticLine text="positive" value ={`${positive}%`} /> */

/*const StatisticLine = (props) => {
  return(
    <div>{props.text} {props.value}</div>
  )
}*/

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const total = good + neutral + bad

  const incGood = () =>{
    setGood(good + 1)
    setAverage(average + 1)

  }
  const incNeutral = () =>{
    setNeutral(neutral + 1)
    setAverage(average + 0)

  }
  const incBad = () =>{
    setBad(bad + 1)
    setAverage(average - 1)

  }
  
  return (
  <div>
    <Header/>
    <button onClick={incGood}>good</button>
    <button onClick={incNeutral}>neutral</button>
    <button onClick={incBad}>bad</button>
    <h1>Statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad} total={total} />
  </div>
  )
}

export default App