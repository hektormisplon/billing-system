import {RiTimeLine, RiContactsBook2Line} from 'react-icons/ri'
import {Query, GET_LOGS} from '../apollo'
import {formatDate} from '../utils/date'
import {ListItem} from '../components'

export default () => (
	<div className="list">
		<div className="list-header">
			<div className="header-item client">
				<RiContactsBook2Line />
				<span>Client</span>
			</div>
			<div className="header-item date">
				<RiTimeLine />
				<span>Date</span>
			</div>
		</div>
		<Query query={GET_LOGS} id={null}>
			{({logs}) =>
				logs.map(({id, client_id, startTime}) => (
					<ListItem key={id} href={`logs/${id}`}>
						<span>{client_id.name}</span>
						<span>{formatDate(startTime)}</span>
					</ListItem>
				))
			}
		</Query>
		<style jsx>
			{`
        .list-header {
          display: flex;
          color: var(--color-primary-700);
        }

        .list-header > * {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 1.6rem;
          border-bottom: 1px solid var(--color-primary-100);
        }

        .header-item:first-child {
          margin-right: 0.8rem;
        }

        .header-item:last-child {
          margin-left: 0.8rem;
        }

        .list-header span {
          margin-left: 0.4rem;
        }

        .date {
          justify-content: flex-end;
        }
      `}
		</style>
	</div>
)
