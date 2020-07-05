import PropTypes from 'prop-types'

const Dropdown = ({ name, placeholder, options, value, required, icon, ...rest }) => (
	<div className="dropdown">
		<div className="icon">
			<i
				data-eva={icon}
				data-eva-fill="#aaaaaa"
			/>
		</div>
		<select name={name} {...rest} defaultValue="" value={value}>
			{placeholder && (
				<option 
					value="" disabled={required} hidden={required}>
					{placeholder}
				</option>
			)}
			{options.map((option, id) => (
				<option key={id.toString()}>{option}</option>
			))}
		</select>
		<style jsx>
			{`
        .dropdown {
          display: flex;
        }

        .icon {
          padding: 1.2rem 1.4rem;
          padding-top: 1.4rem;
		      border: 1px solid #eee;
          border-right: 0;
          border-radius: var(--border-radius) 0 0 var(--border-radius);
        }

        select {
          flex: 1;
          color: #aaa;
          border-radius: 0 var(--border-radius) var(--border-radius) 0;
        }
      `}
		</style>
	</div>
)

Dropdown.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.string),
	value: PropTypes.string
}

export default Dropdown
