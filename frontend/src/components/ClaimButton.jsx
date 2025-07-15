import React from 'react';

const ClaimButton = ({ selectedUser, onClaim }) => {
    return (
        <div>
            <button disabled={!selectedUser} onClick={onClaim}>
                Claim Points
            </button>
        </div>
    );
};

export default ClaimButton;