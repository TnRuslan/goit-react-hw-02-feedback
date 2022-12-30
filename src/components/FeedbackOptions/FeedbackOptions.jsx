import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ addFeedback, goodFeedback, neutralFeedback, badFeedback }) => {
    return (
        <ul className={css['btn-list']}>
          <li><button className={css.btn__item} type='button' onClick={addFeedback} name={goodFeedback}>{goodFeedback}</button></li>
          <li><button className={css.btn__item} type='button' onClick={addFeedback} name={neutralFeedback}>{neutralFeedback}</button></li>
          <li><button className={css.btn__item} type='button' onClick={addFeedback} name={badFeedback}>{badFeedback}</button></li>
        </ul>
    )
}