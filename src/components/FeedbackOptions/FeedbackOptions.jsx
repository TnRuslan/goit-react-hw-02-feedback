import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ addGood, addNeutral, addBad }) => {
    return (
        <ul className={css['btn-list']}>
          <li><button className={css.btn__item} type='button' onClick={addGood}>Good</button></li>
          <li><button className={css.btn__item} type='button' onClick={addNeutral}>Neutral</button></li>
          <li><button className={css.btn__item} type='button' onClick={addBad}>Bad</button></li>
        </ul>
    )
}