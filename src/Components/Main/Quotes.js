import QuoteItem from './QuoteItem'
import quoteList from './quoteList.json'


const Quotes = () => {
	return (
		<div className='grid gap-8 p-4 pt-24 py-8 mx-auto lg:gap-12 max-w-7xl mt-3.5'>
			{quoteList.map((quote) => (
				<QuoteItem quote={quote.content} author={quote.author} />
			))}
		</div>
	)
}

export default Quotes