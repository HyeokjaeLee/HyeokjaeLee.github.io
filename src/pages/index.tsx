import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { Nav } from "components/nav";
import LeftArrow from "img/left-arrow.svg";
import RightArrow from "img/right-arrow.svg";

interface Node {
  excerpt: string;
  fields: { slug: string };
  frontmatter: {
    title: string;
    date: string;
    description: string;
    tag: string[];
  };
}
interface Group {
  tag: string;
  totalCount: number;
}
interface Props {
  data: {
    allMarkdownRemark: {
      group: Group[];
      nodes: Node[];
    };
  };
}

const Index = ({ data }: Props) => {
  /**페이지 당 보여줄 포스트 갯수*/
  const postsPerPage = 7;
  const { group, nodes } = data.allMarkdownRemark;
  const [targetTagList, setTargetTagList] = useState<string[]>([]);
  const [filteredNodes, setFilteredNodes] = useState<Node[]>(nodes);
  const [currentPage, setCurrentPage] = useState(1);
  /**필터링할 태그 선택*/
  const check_tag = (tag: string) => (targetTagList.indexOf(tag) !== -1 ? "checked" : "");
  const TagFilter = () => (
    <div className="tags all-posts">
      {group.map((item, entireTagListIndex) => {
        const filter_posts_by_tag = () => {
          setCurrentPage(1);
          setFilteredNodes(nodes);
          const tagIndex = targetTagList.indexOf(item.tag);
          if (tagIndex === -1) {
            targetTagList.push(item.tag);
          } else {
            targetTagList.splice(tagIndex, 1);
          }
          setTargetTagList(targetTagList);
          if (targetTagList.length > 0) {
            setFilteredNodes(
              //선택된 태그의 갯수와 Post의 태그가 선택된 태그에 포함되는 갯수가 같아야 함
              nodes.filter(
                (node) =>
                  node.frontmatter.tag.filter((_tag) => targetTagList.includes(_tag)).length ===
                  targetTagList.length
              )
            );
          }
        };
        return (
          <a
            key={`entireTag${entireTagListIndex}`}
            onClick={filter_posts_by_tag}
            className={"tag " + check_tag(item.tag)}
          >
            {item.tag}
          </a>
        );
      })}
    </div>
  );
  const PageNavi = () => {
    const totalPostCount = filteredNodes.length;
    const totalPageCount = Math.ceil(totalPostCount / postsPerPage);
    const pageIndexList: JSX.Element[] = [];
    const nearPageCount = totalPageCount < 5 ? totalPageCount : 5;
    let startPageIndex = currentPage,
      endPageIndex = currentPage;
    for (
      let viewingPage = 0;
      viewingPage < nearPageCount;
      viewingPage = endPageIndex - startPageIndex + 1
    ) {
      startPageIndex = startPageIndex <= 1 ? 1 : startPageIndex - 1;
      endPageIndex = endPageIndex >= totalPageCount ? totalPageCount : endPageIndex + 1;
    }
    for (let pageIndex = startPageIndex; pageIndex <= endPageIndex; pageIndex++) {
      const className = pageIndex === currentPage ? "currentPage" : "";
      pageIndexList.push(
        <a
          onClick={() => {
            setCurrentPage(pageIndex);
          }}
          className={className}
        >
          {pageIndex}
        </a>
      );
    }
    const leftArrowHide = startPageIndex === 1 ? "hide" : "";
    const rightArrowHide = endPageIndex >= totalPageCount ? "hide" : "";
    const PageNaviArrow = (props: { Arrow: any; toMove: number; hide: "hide" | "" }) => (
      <a
        onClick={() => {
          setCurrentPage(props.toMove);
        }}
        className={"arrow " + props.hide}
      >
        <props.Arrow className="arrow-svg" />
      </a>
    );
    return (
      <div className="pageNav">
        <PageNaviArrow Arrow={LeftArrow} toMove={startPageIndex - 1} hide={leftArrowHide} />
        {pageIndexList}
        <PageNaviArrow Arrow={RightArrow} toMove={endPageIndex + 1} hide={rightArrowHide} />
      </div>
    );
  };
  const Posts = () => {
    const viewingNodes = filteredNodes.slice(
      (currentPage - 1) * postsPerPage,
      currentPage * postsPerPage
    );
    const emptyPost = (
      <div className="emptyPost">
        <div className="icon">🚧</div>
        <h1>OOPSE!</h1>
        <p>조건을 만족하는 Post가 없습니다.</p>
      </div>
    );
    const postList = viewingNodes.map((node, postListIndex) => {
      const { title, date, description, tag } = node.frontmatter;
      const IndividualsTagList = tag.map((_tag, individualsTagIndex) => (
        <li key={`individualsTag${individualsTagIndex}`} className={check_tag(_tag)}>
          {_tag}
        </li>
      ));
      return (
        <li key={`postList${postListIndex}`}>
          <Link to={node.fields.slug}>
            <div>
              <i>Posted on {date}</i>
              <h2>{title}</h2>
              <p>{description}</p>
              <ul className="tags each-post on-index">{IndividualsTagList}</ul>
            </div>
          </Link>
        </li>
      );
    });
    return <ul className="posts">{postList.length === 0 ? emptyPost : postList}</ul>;
  };

  return (
    <>
      <section className="content first">
        <TagFilter />
        <Posts />
        <PageNavi />
      </section>
    </>
  );
};

export default Index;

export const data = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      group(field: frontmatter___tag) {
        tag: fieldValue
        totalCount
      }
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          description
          tag
        }
      }
    }
  }
`;
