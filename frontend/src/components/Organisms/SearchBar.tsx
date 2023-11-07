import React, { useState } from "react";
import { useRouter } from "next/router";
import Input from "components/atoms/Input";
import { Button } from "components/atoms/Button";
import { Icon } from "@iconify/react";
import useElasticSearch from "hooks/useElasticSearch";
import TextArea from "components/atoms/TextArea";

// SearchBar
const SearchBar: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [selectSearch, setSelectSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<
    { path: string; treatmentId: string }[]
  >([]);
  const router = useRouter();

  useElasticSearch(value, setSearchResults);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === "") {
    } else {
      router.push(`/search/?id=${selectSearch}`);
    }
  };

  const onClick = (treatmentId: string) => {
    router.push(`/search/?id=${treatmentId}`);
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleFormSubmit}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="검색어를 입력해주세요"
          className="search-input"
        />
        <Button ver="search" type="submit">
          <Icon icon="ic:baseline-search" width={30} height={30} />
        </Button>
      </form>
      <div className="search-results">
        {searchResults.map((result, index) => (
          <TextArea
            key={index}
            className="search-result-text"
            children={result.path}
            onClick={() => onClick(result.treatmentId)}
          ></TextArea>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
