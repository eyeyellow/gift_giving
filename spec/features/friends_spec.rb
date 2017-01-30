require 'rails_helper'

RSpec.describe 'friends and family', js: true do
  scenario 'a user adds a friend' do
    visit friends_path
    click_on 'Add New Friend'

    fill_in 'Name', with: 'Mike Jones'
    fill_in 'Birthday', with: '2/22/94'

    click_on 'create'

    expect(page).to have_content(/successfully created new friend/i)
  end

  context 'exiting friend' do
    let!(:friend) { Friend.create!(name: 'Mike Jones', birthday: '2/22/94') }

    scenario 'a user edits a friend' do
      visit friends_path
      click_on 'Edit'

      within('#friend-profile') do
        fill_in 'Name', with: 'Mike Smith'
        click_on 'update'
      end

      expect(page).to have_content(/successfully changed/i)

      expect(friend.reload.name).to eq('Mike Smith')
    end

    scenario 'a user removes a friend'
  end
end
