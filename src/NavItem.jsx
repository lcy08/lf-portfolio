import PropTypes from 'prop-types';

function NavItem({ id, children, activeId }) {
    const isActive = activeId === id;
    const navClass = () => `${isActive ? 'text-blue-900 mb-9 font-bold' : 'text-text font-medium' } hover:text-blue-100 font-nav transition-colors duration-300`;
    return (
        <li className={`mx-4 justify-center items-center text-center`}>
            <a href={`#${id}`} className={navClass()}>
                {children}
            </a>
        </li>
    );
}

NavItem.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    activeId: PropTypes.string.isRequired,
};

export default NavItem;