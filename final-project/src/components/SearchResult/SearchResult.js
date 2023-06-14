import css from './SearchResult.module.scss'

export const SearchResult = () => {
    return (
    <div className={css.searchResult_container}>  
      <div className={css.contentSearchResultContainer}>
        <div className={css.containerSearchResultCaption}>
          <h1 className={css.searchResult_caption}>Ищем. Скоро
            <br/>будут результаты
          </h1>
          <p className={css.searchResult_description}>Поиск может занять некоторое время,
            <br/>просим сохранять терпение.
          </p>
        </div>
        <div className={css.searchResultContainer_img}>
          <div className={css.searchResult_img}></div>
        </div>
      </div>
      
      <div className={css.summarySearchResult_container}>
        <div className={css.summarySearchResult_containerDescription}>
          <h2 className={css.summarySearchResult_caption}>Общая сводка</h2>
          <p className={css.summarySearchResult_description}>Найдено Х вариантов</p>
        </div>
        <div className={css.summarySearchResult_block}>
            <div className={css.summarySearchResult_leftColumn}>
                <p className={css.summarySearchResult_row}>Период</p>
                <p className={css.summarySearchResult_row}>Всего</p>
                <p className={css.summarySearchResult_row}>Риски</p>
            </div>
            <div className={css.summarySearchResult_rightColumn}></div>
        </div>
      </div>

      <div className={css.listSearchResult_container}>
        <h2 className={css.summarySearchResult_caption}>Список документов</h2>
        <div className={css.listSearchResult_block}>
            <div className={css.listSearchResult_card}></div>
            <div className={css.listSearchResult_card}></div>
        </div>
      </div>
    
      <div className={css.listSearchResult_button}>
        <button className={css.button_service}>Показать ещё</button>
      </div>
    </div>   
  )
}

export default SearchResult