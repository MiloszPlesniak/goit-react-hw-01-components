import css from './Statistics.module.css';
import clsx from 'clsx';

const Statistics = prop => {
  return (
    <div className={css.statistics}>
      <h2 className={css.title}>{prop.title}</h2>
      <ul className={css.statList}>
        {prop.stats.map(stat => {
          return (
            <li
              className={clsx(css.item, {
                [css.itemDocx]: stat.label === '.docx',
                [css.itemPdf]: stat.label === '.pdf',
                [css.itemMp3]: stat.label === '.mp3',
                [css.itemPsd]: stat.label === '.psd',
              })}
              key={stat.id}
            >
              <p className={css.label}>{stat.label}</p>
              <p className={css.percentage}>{stat.percentage}%</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Statistics;
