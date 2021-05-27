export const handleDeleteHouse = async (id, cb) => {
    try {
        await deleteHouseApi(id);
        window.alert('House deleted');
        if (cb) {
            cb();
        }
    } catch (e) {
        window.alert('Error delete house');
    }
};
