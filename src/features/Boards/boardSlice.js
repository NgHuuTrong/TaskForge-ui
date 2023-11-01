import { createSlice } from "@reduxjs/toolkit";
import initialColumns from '../../assets/data/ListCardData.json';
import userImage3 from '../../assets/user3.png';

let currentId = 5;

const initialState = {
    boardList: [],
    currentBoard: {
        name: 'My Board',
        content: initialColumns
    },
    currentCard: {}
};

const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addList(state, action) {
            state.currentBoard.content.push({ id: action.payload, list: [] });
        },
        deleteList(state, action) {
            state.currentBoard.content = state.currentBoard.content.filter(list => list.id !== action.payload);
        },
        copyList(state, action) {
            let { listId, cardList } = action.payload;

            cardList = cardList.map(card => {
                return {
                    ...card,
                    id: ++currentId
                }
            });

            state.currentBoard.content.push({ id: listId, list: cardList });
        },
        exchangeTwoList(state, action) {
            const { sourceIndex, destinationIndex } = action.payload;

            const removeList = state.content.splice(sourceIndex, 1)[0];
            state.content.splice(destinationIndex, 0, removeList);
        },
        addCard(state, action) {
            const { listId, cardDescription } = action.payload;
            const list = state.currentBoard.content.find(list => list.id === listId);

            list.list = [...list.list, {
                id: currentId++,
                description: cardDescription,
                userId: 3,
                userImage: userImage3
            }];
        },
        moveAllCards(state, action) {
            const { originalListId, newListId } = action.payload;
            console.log(originalListId + newListId);
            const originalList = state.currentBoard.content.find(list => list.id === originalListId);
            const newList = state.currentBoard.content.find(list => list.id === newListId);

            newList.list = newList.list.concat(originalList.list);
            originalList.list = [];
        },
        deleteAllCards(state, action) {
            const list = state.currentBoard.content.find(list => list.id === action.payload);
            list.list = [];
        },
        moveCardInList(state, action) {
            const { listId, originalIndex, newIndex } = action.payload;

            const list = state.currentBoard.content.find(list => list.id === listId);
            const removeCard = list.list.splice(originalIndex, 1)[0];

            list.list.splice(newIndex, 0, removeCard);
        },
        moveCardToAnotherList(state, action) {
            const { originalListId, newListId, originalIndex, newIndex } = action.payload;

            const originalList = state.currentBoard.content.find(list => list.id === originalListId);
            const newList = state.currentBoard.content.find(list => list.id === newListId);

            // delete card in the original list
            const removeCard = originalList.list.splice(originalIndex, 1)[0];

            // add card to the new list
            newList.list.splice(newIndex, 0, removeCard);
        }
    }
});


export const {
    addList,
    deleteList,
    copyList,
    exchangeTwoList,
    addCard,
    moveAllCards,
    deleteAllCards,
    moveCardInList,
    moveCardToAnotherList
} = boardSlice.actions;

export default boardSlice.reducer;

export const getBoard = (boardId) => (state) => state.board.currentBoard;
