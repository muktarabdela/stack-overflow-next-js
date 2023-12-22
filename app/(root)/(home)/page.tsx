import LocalSearchBar from "@/components/shared/search/LocalSearchBar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Filter from "@/components/shared/Filter"
import HomeFilters from "@/components/home/HomeFilters"
import { HomePageFilters } from "@/constants/filter"
import NoResult from "@/components/shared/NoResult"
import QuestionCard from "@/components/cards/QuestionCard"

const questions = [
    {
        _id: '1',
        title: 'Best Course NextJS',
        tags: [{ _id: '1', name: 'nextjs' }, { _id: '2', name: 'react' }],
        author: {
            _id: 'authorId1',
            name: 'muktar',
            picture: 'url_to_picture1',
            clerkId: 'clerkId1',
        },
        upvotes: ['8777677677'],
        views: 10000000,
        answers: [
            { /* Answer object structure goes here */ },
            { /* Another answer object structure goes here */ },
        ],
        createdAt: new Date('2023-09-01'),
    },
    {
        _id: '2',
        title: 'This Is Demo Question',
        tags: [{ _id: '1', name: 'DEMO' }, { _id: '2', name: 'redux' }],
        author: {
            _id: 'authorId2',
            name: 'nura',
            picture: 'url_to_picture2',
            clerkId: 'clerkId2',
        },
        upvotes: ['4'],
        views: 10,
        answers: [
            { /* Answer object structure goes here */ },
            { /* Another answer object structure goes here */ },
        ],
        createdAt: new Date('2022-09-01'),
    },
    {
        _id: '3',
        title: 'which are types of thermal insulation for',
        tags: [{ _id: '1', name: 'instulation' }, { _id: '2', name: 'react' }],
        author: {
            _id: 'authorId3',
            name: 'hamza',
            picture: 'url_to_picture3',
            clerkId: 'clerkId3',
        },
        upvotes: ['20'],
        views: 106,
        answers: [
            { /* Answer object structure goes here */ },
            { /* Another answer object structure goes here */ },
        ],
        createdAt: new Date('2020-09-01'),
    },
];

const Home = () => {
    return (
        <>
            <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="h1-bold text-dark100_light900">All Questions</h1>
                <Link href="/ask-question" className="flex justify-end max-sm:w-full">
                    <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
                        Ask a Question
                    </Button>
                </Link>
            </div>

            <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
                <LocalSearchBar
                    route="/"
                    iconPosition="left"
                    imgSrc="/assets/icons/search.svg"
                    placeholder="Search for questions"
                    otherClasses="flex-1"
                />
                <Filter
                    filters={HomePageFilters}
                    otherClasses="min-h-[56px] sm:min-w-[170px]"
                    containerClasses="hidden max-md:flex"
                />
            </div>
            <HomeFilters />

            <div className="mt-10 flex w-full flex-col gap-6">
                {questions.length > 0 ?
                    questions.map((question) => (
                        <QuestionCard
                            key={question._id}
                            _id={question._id}
                            title={question.title}
                            tags={question.tags}
                            author={question.author}
                            upvotes={question.upvotes}
                            views={question.views}
                            answers={question.answers}
                            createdAt={question.createdAt}
                        />
                    )) : <NoResult
                        title="There’s no question to show"
                        description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
                        link="/ask-question"
                        linkTitle="Ask a Question"
                    />
                }
            </div>

        </>
    )
}
export default Home