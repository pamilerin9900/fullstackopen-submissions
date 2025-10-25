import { useState } from 'react'

// Reusable Button component
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

// StatisticLine renders one table row (name + value)
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

// Statistics component displays all the data
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (total === 0) {
    return <p>No feedback given</p>
  }

  const average = (good - bad) / total
  const positive = (good / total) * 100

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={average.toFixed(2)} />
          <StatisticLine text="Positive" value={`${positive.toFixed(1)}%`} />
        </tbody>
      </table>
    </div>
  )
}

// Root component
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
