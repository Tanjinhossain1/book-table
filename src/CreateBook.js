import React, { useState } from 'react';

const CreateBook = ({ refetch }) => {
    const [bookPartError, setBookPartError] = useState('')
    const CreateBook = (event) => {
        event.preventDefault();
        const bookCreatorName = event.target.bookCreatorName.value;
        const bookName = event.target.bookName.value;
        const bookCreateYear = event.target.bookCreateYear.value;
        const publishDate = event.target.publishDate.value;
        const bookPage = event.target.bookPage.value;
        const bookPart = event.target.bookPart.value;
        const bookTopic = event.target.bookTopic.value;
        const timeSpend = event.target.timeSpend.value;
        const bookPrice = event.target.bookPrice.value;
        if (bookPart === 'Select Book Part') {
            setBookPartError('Please Select Your Part')
        } else {
            setBookPartError('')
            const createBookDetail = { bookCreatorName, bookName, bookCreateYear, publishDate, bookPage, bookPart, bookTopic, timeSpend, bookPrice };
            fetch('https://infinite-springs-80402.herokuapp.com/bookCreate', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(createBookDetail)
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    event.target.reset()
                    console.log(data)
                })
            console.log(createBookDetail);
        }
    }

    return (
        <div>
            <input type="checkbox" id="createBook" class="modal-toggle" />
            <div class="modal  modal-bottom sm:modal-middle">
                <div class="modal-box ">
                    <form onSubmit={CreateBook} className='w-3/4 mx-auto'>
                        <div>
                            <div>
                                <label class="label">
                                    <span class="label-text-alt">Book Creator Name</span>
                                </label>
                                <input type="text" name='bookCreatorName' placeholder="Book Creator Name" class="input input-bordered input-primary w-full max-w-xs" required />
                            </div>
                            <div>
                                <label class="label">
                                    <span class="label-text-alt">Book Name</span>
                                </label>
                                <input type="text" name='bookName' placeholder="Book Name" class="input input-bordered input-primary w-full max-w-xs" required />
                            </div>
                            <div>
                                <label class="label">
                                    <span class="label-text-alt">Book Create year</span>
                                </label>
                                <input type="date" name='bookCreateYear' placeholder="Book Create Year" class="input input-bordered input-primary w-full max-w-xs" required />
                            </div>
                            <div>
                                <label class="label">
                                    <span class="label-text-alt">Book Publish Date</span>
                                </label>
                                <input type="date" name='publishDate' placeholder="Book Publish Date" class="input input-bordered input-primary w-full max-w-xs" required />
                            </div>
                            <div>
                                <label class="label">
                                    <span class="label-text-alt"> Book Page</span>
                                </label>
                                <input type="number" name='bookPage' placeholder=" Book Page" class="input input-bordered input-primary w-full max-w-xs" required />
                            </div>
                            <label class="label">
                                <span class="label-text-alt"> Book Part</span>
                            </label>
                            <select name='bookPart' class="select select-primary w-full max-w-xs" required required>
                                <option disabled selected>Select Book Part</option>
                                <option>Only This part</option>
                                <option>part 1</option>
                                <option>part 2</option>
                                <option>part 3</option>
                                <option>part 4</option>
                                <option>part 5</option>
                                <option>part 6</option>
                                <option>part 7</option>
                            </select>
                            <label className='text-red-500' htmlFor="">{bookPartError}</label>
                            <div>
                                <label class="label">
                                    <span class="label-text-alt"> Book Topic</span>
                                </label>
                                <input type="text" name='bookTopic' placeholder=" Book Topic" class="input input-bordered input-primary w-full max-w-xs" required />
                            </div>
                            <div>
                                <label class="label">
                                    <span class="label-text-alt"> Time Spend</span>
                                </label>
                                <input type="text" name='timeSpend' placeholder=" Time Spend" class="input input-bordered input-primary w-full max-w-xs" required />
                            </div>
                            <div>
                                <label class="label">
                                    <span class="label-text-alt"> Book Price</span>
                                </label>
                                <input type="text" name='bookPrice' placeholder=" Book Price" class="input input-bordered input-primary w-full max-w-xs" required />
                            </div>
                            <input className='btn btn-outline btn-success mt-4 w-full' type="submit" value="Book Create" />
                        </div>
                    </form>
                    <div class="modal-action">
                        <label for="createBook" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBook;