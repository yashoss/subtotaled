require 'rails_helper'


RSpec.describe User, type: :model do
  let!(:user) { User.create!(username: 'guest', email: 'test@test.com',password: 'password') }

  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:session_token) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_length_of(:password).is_at_least(6)}
  end

  describe 'associations' do
      it { should have_many(:registers) }
  end

  # describe 'model_methods' do
  #   describe '.find_by_credentials' do
  #     context 'when given correct credentials' do
  #
  #     end
  #   end
  # end
end
