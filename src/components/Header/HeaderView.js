import classNames from 'classnames';
import { PropTypes } from 'react';

const HeaderView = ({
    items,
    githubLink,
    onLabelClick
}) => (<nav className="github-embed-nav">
    {items.map(({ shown, label }, index) =>
        <a
            className={classNames({
                'github-embed-nav-link': true,
                'github-embed-nav-link-shown': shown
            })}
            key={index}
            onClick={() => onLabelClick(index)}
        >
            {label}
        </a>
    )}

    <a className="github-embed-nav-on-github" target="_blank" href={githubLink}>On Github</a>
</nav>);

HeaderView.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        shown: PropTypes.bool.isRequired
    })),
    onLabelClick: PropTypes.func.isRequired,
    githubLink: PropTypes.string.isRequired
};

export default HeaderView;