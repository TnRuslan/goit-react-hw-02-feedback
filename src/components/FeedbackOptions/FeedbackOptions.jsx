import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ addFeedback, options }) => {
  return (
      
      <ul className={css['btn-list']}>
        {options.map((option, index) => (<li key={index}><button className={css.btn__item} type='button' onClick={addFeedback} name={option}>{option}</button></li>))}
      </ul>
    )
}