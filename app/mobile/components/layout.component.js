import { BottomNav } from '../components'
import { globalStyles } from '../styles'

export default ({ children, bottomNav }) => (
	<div className="container">
		<div className="page-container">
			<main className="content">
				{children}
				{bottomNav && <BottomNav/>}
			</main>
		</div>
		<style jsx global>{globalStyles}</style>
		<style jsx>{`
				.container {
					background: #eee;
          min-height: 100vh;
          min-height: -webkit-fill-available;
				}

				.container,
				.page-container {
					display: flex;
					flex-direction: column;
          flex: 1;
				}

				.content {
					flex: 1;
					order: -1;
					display: flex;
					flex-direction: column;
					background: #fff;
					border-radius: var(--border-radius);
					padding: 1.6rem;
          max-width: 48rem;
				}

				@media (min-width: 768px) {
          .container {
            justify-content: center;
            align-items: center;
          }

					.page-container {
						flex-direction: row;
					}

					.content {
						order: 1;
            min-width: 48rem;
					}
			`}</style>
	</div>
)
